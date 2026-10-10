#!/usr/bin/env python3
import os
from datetime import datetime, timedelta
from google.oauth2 import service_account
from googleapiclient.discovery import build

KEY_FILE = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "gsc-key.json")
creds = service_account.Credentials.from_service_account_file(KEY_FILE, scopes=["https://www.googleapis.com/auth/webmasters.readonly"])
service = build("searchconsole", "v1", credentials=creds)

end_date = (datetime.now() - timedelta(days=2)).strftime("%Y-%m-%d")
start_date = (datetime.now() - timedelta(days=32)).strftime("%Y-%m-%d")

sites = [
    "sc-domain:urbanessentialhub.com",
    "sc-domain:click2future.com",
    "sc-domain:influencerratecalc.com",
    "sc-domain:trendtroveshop.com",
    "sc-domain:hotstylepro.com"
]

for site in sites:
    print(f"\n" + "="*80)
    print(f"📊 DEEP DIVE FOR {site} ({start_date} to {end_date})")
    print("="*80)
    
    # Get top queries
    req_queries = {"startDate": start_date, "endDate": end_date, "dimensions": ["query"], "rowLimit": 10}
    try:
        queries = service.searchanalytics().query(siteUrl=site, body=req_queries).execute().get("rows", [])
        if queries:
            print("\n🔥 TOP 10 QUERIES BY IMPRESSIONS:")
            print(f"{'Query':<50} | {'Clicks':<6} | {'Impr':<6} | {'Pos':<5}")
            for r in queries:
                print(f"{r['keys'][0]:<50} | {r.get('clicks',0):<6} | {r.get('impressions',0):<6} | {r.get('position',0):.1f}")
        else:
            print("\nNo search queries found.")
    except Exception as e:
        print(f"Error fetching queries: {e}")

    # Get top pages
    req_pages = {"startDate": start_date, "endDate": end_date, "dimensions": ["page"], "rowLimit": 5}
    try:
        pages = service.searchanalytics().query(siteUrl=site, body=req_pages).execute().get("rows", [])
        if pages:
            print("\n📄 TOP 5 PAGES BY IMPRESSIONS:")
            for r in pages:
                print(f"{r['keys'][0]:<70} | Clicks: {r.get('clicks',0)} | Impr: {r.get('impressions',0)} | Pos: {r.get('position',0):.1f}")
    except Exception as e:
        pass
