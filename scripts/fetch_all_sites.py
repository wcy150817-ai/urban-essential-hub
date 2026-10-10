#!/usr/bin/env python3
import os
from datetime import datetime, timedelta
from google.oauth2 import service_account
from googleapiclient.discovery import build

KEY_FILE = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "gsc-key.json")
creds = service_account.Credentials.from_service_account_file(KEY_FILE, scopes=["https://www.googleapis.com/auth/webmasters.readonly"])
service = build("searchconsole", "v1", credentials=creds)

end = datetime.now().strftime("%Y-%m-%d")
start = (datetime.now() - timedelta(days=28)).strftime("%Y-%m-%d")

# Get list of sites
site_list = service.sites().list().execute()
sites = [s["siteUrl"] for s in site_list.get("siteEntry", [])]

print("=== FOUND WEBSITES IN YOUR GSC ===")
for site in sites:
    print(f"\nAnalyzing {site}...")
    try:
        req = {"startDate": start, "endDate": end, "dimensions": ["query"], "rowLimit": 5}
        resp = service.searchanalytics().query(siteUrl=site, body=req).execute()
        rows = resp.get("rows", [])
        if not rows:
            print("  No search data in last 28 days.")
            continue
            
        print(f"  {'Query':<40} | {'Clicks':<6} | {'Impr':<6} | {'Pos':<5}")
        for r in rows:
            print(f"  {r['keys'][0]:<40} | {r.get('clicks',0):<6} | {r.get('impressions',0):<6} | {r.get('position',0):.1f}")
    except Exception as e:
        print(f"  Error: {e}")
