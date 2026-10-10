#!/usr/bin/env python3
"""
Fetch GSC performance data (Queries, Pages, Impressions, Clicks, CTR, Position).
"""

import os
import sys
from datetime import datetime, timedelta
from google.oauth2 import service_account
from googleapiclient.discovery import build

KEY_FILE = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "gsc-key.json")
SCOPES = ["https://www.googleapis.com/auth/webmasters.readonly"]

def main():
    if not os.path.exists(KEY_FILE):
        print(f"Error: Key file not found at {KEY_FILE}")
        sys.exit(1)

    creds = service_account.Credentials.from_service_account_file(KEY_FILE, scopes=SCOPES)
    service = build("searchconsole", "v1", credentials=creds)

    # 1. List accessible sites
    try:
        site_list = service.sites().list().execute()
        sites = [s["siteUrl"] for s in site_list.get("siteEntry", [])]
    except Exception as e:
        print(f"Failed to list sites: {e}")
        return

    if not sites:
        print("No verified sites found for this service account.")
        print("Please ensure you added: gsc-0930@careful-compass-353411.iam.gserviceaccount.com to GSC Users.")
        return

    print("Found GSC Sites:", sites)
    
    # Query performance for each site (Last 28 days)
    end_date = datetime.now().strftime("%Y-%m-%d")
    start_date = (datetime.now() - timedelta(days=28)).strftime("%Y-%m-%d")

    for site_url in sites:
        print("\n" + "=" * 70)
        print(f"REPORT FOR: {site_url} ({start_date} to {end_date})")
        print("=" * 70)

        request_body = {
            "startDate": start_date,
            "endDate": end_date,
            "dimensions": ["query"],
            "rowLimit": 50,
        }

        try:
            response = service.searchanalytics().query(siteUrl=site_url, body=request_body).execute()
            rows = response.get("rows", [])
            if not rows:
                print("No query search data recorded yet in this time window.")
                continue

            print(f"{'Query':<45} | {'Clicks':<6} | {'Impr':<6} | {'CTR':<7} | {'Pos':<5}")
            print("-" * 75)
            for row in rows:
                query = row["keys"][0]
                clicks = row.get("clicks", 0)
                impressions = row.get("impressions", 0)
                ctr = f"{row.get('ctr', 0)*100:.1f}%"
                position = f"{row.get('position', 0):.1f}"
                print(f"{query[:44]:<45} | {clicks:<6} | {impressions:<6} | {ctr:<7} | {position:<5}")
        except Exception as e:
            print(f"Error querying {site_url}: {e}")

if __name__ == "__main__":
    main()
