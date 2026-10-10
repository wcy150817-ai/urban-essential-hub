#!/usr/bin/env python3
import os
from datetime import datetime, timedelta
from google.oauth2 import service_account
from googleapiclient.discovery import build

KEY_FILE = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "gsc-key.json")
creds = service_account.Credentials.from_service_account_file(KEY_FILE, scopes=["https://www.googleapis.com/auth/webmasters.readonly"])
service = build("searchconsole", "v1", credentials=creds)

# GSC data usually has a 2-3 day lag
end_date = (datetime.now() - timedelta(days=2)).strftime("%Y-%m-%d")
start_date = (datetime.now() - timedelta(days=32)).strftime("%Y-%m-%d")

site = "sc-domain:purewearspace.com"
print(f"=== DEEP DIVE FOR {site} ({start_date} to {end_date}) ===")

def query_gsc(dimensions, limit=10):
    req = {
        "startDate": start_date,
        "endDate": end_date,
        "dimensions": dimensions,
        "rowLimit": limit,
    }
    return service.searchanalytics().query(siteUrl=site, body=req).execute().get("rows", [])

# 1. Top Pages
print("\n🔥 TOP 10 PAGES BY IMPRESSIONS:")
pages = query_gsc(["page"], 10)
print(f"{'Page':<70} | {'Clicks':<6} | {'Impr':<6} | {'Pos':<5}")
for r in pages:
    p = r['keys'][0].replace("https://purewearspace.com", "").replace("https://tool.purewearspace.com", "")
    print(f"{p:<70} | {r.get('clicks',0):<6} | {r.get('impressions',0):<6} | {r.get('position',0):.1f}")

# 2. Top Queries
print("\n🔍 TOP 20 QUERIES BY IMPRESSIONS:")
queries = query_gsc(["query"], 20)
print(f"{'Query':<40} | {'Clicks':<6} | {'Impr':<6} | {'Pos':<5}")
for r in queries:
    print(f"{r['keys'][0]:<40} | {r.get('clicks',0):<6} | {r.get('impressions',0):<6} | {r.get('position',0):.1f}")

# 3. Best Ranking Queries (Pos < 20)
print("\n⭐ BEST RANKING QUERIES (Position < 20):")
req_best = {
    "startDate": start_date,
    "endDate": end_date,
    "dimensions": ["query", "page"],
    "rowLimit": 100
}
best_queries = service.searchanalytics().query(siteUrl=site, body=req_best).execute().get("rows", [])
found_best = False
for r in best_queries:
    if r.get('position', 100) < 20:
        found_best = True
        p = r['keys'][1].replace("https://purewearspace.com", "")
        print(f"Pos {r.get('position',0):.1f} | Impr {r.get('impressions',0):<3} | {r['keys'][0]:<35} | {p}")
if not found_best:
    print("No queries ranking in the top 20 yet.")

