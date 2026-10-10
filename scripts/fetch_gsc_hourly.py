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

req = {
    "startDate": start,
    "endDate": end,
    "dimensions": ["query", "page"],
    "rowLimit": 100,
}
resp = service.searchanalytics().query(siteUrl="sc-domain:purewearspace.com", body=req).execute()
for r in resp.get("rows", []):
    q = r["keys"][0]
    p = r["keys"][1]
    pos = r.get("position", 0)
    if pos < 15:
        print(f"Pos {pos:.1f} | Impr {r.get('impressions',0):<3} | {q:<35} | {p}")
