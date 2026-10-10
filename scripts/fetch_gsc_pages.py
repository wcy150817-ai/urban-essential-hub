#!/usr/bin/env python3
import os, sys
from datetime import datetime, timedelta
from google.oauth2 import service_account
from googleapiclient.discovery import build

KEY_FILE = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "gsc-key.json")
SCOPES = ["https://www.googleapis.com/auth/webmasters.readonly"]

def main():
    creds = service_account.Credentials.from_service_account_file(KEY_FILE, scopes=SCOPES)
    service = build("searchconsole", "v1", credentials=creds)
    end_date = datetime.now().strftime("%Y-%m-%d")
    start_date = (datetime.now() - timedelta(days=28)).strftime("%Y-%m-%d")

    site_url = "sc-domain:purewearspace.com"
    request_body = {
        "startDate": start_date,
        "endDate": end_date,
        "dimensions": ["page"],
        "rowLimit": 20,
    }
    print(f"PAGES REPORT FOR: {site_url} ({start_date} to {end_date})")
    response = service.searchanalytics().query(siteUrl=site_url, body=request_body).execute()
    rows = response.get("rows", [])
    print(f"{'Page':<70} | {'Clicks':<6} | {'Impr':<6} | {'Pos':<5}")
    for row in rows:
        page = row["keys"][0]
        clicks = row.get("clicks", 0)
        impr = row.get("impressions", 0)
        pos = f"{row.get('position', 0):.1f}"
        print(f"{page:<70} | {clicks:<6} | {impr:<6} | {pos:<5}")

if __name__ == "__main__":
    main()
