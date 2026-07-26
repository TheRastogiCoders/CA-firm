"""Sync scripts/audit_data.json from live client/src data files."""
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT = Path(__file__).resolve().parent / 'audit_data.json'


def parse_js_string_props(text: str) -> list[dict]:
    """Parse SERVICES_DATA / insights-style object arrays from JS."""
    items = []
    # Split on object starts that have slug:
    chunks = re.split(r'\n\s*\{\s*\n', text)
    for chunk in chunks[1:]:
        if 'slug:' not in chunk:
            continue
        item = {}
        for key in ('slug', 'title', 'shortDescription', 'longDescription', 'category', 'date', 'dateDisplay', 'summary'):
            m = re.search(rf"{key}:\s*'((?:\\'|[^'])*)'", chunk)
            if m:
                item[key] = m.group(1).replace("\\'", "'")
        areas = re.search(r'keyAreas:\s*\[(.*?)\]', chunk, re.S)
        if areas:
            item['keyAreas'] = [a.replace("\\'", "'") for a in re.findall(r"'((?:\\'|[^'])*)'", areas.group(1))]
        related = re.search(r'relatedSlugs:\s*\[(.*?)\]', chunk, re.S)
        if related:
            item['relatedSlugs'] = re.findall(r"'([^']+)'", related.group(1))
        body = re.search(r'body:\s*\[(.*?)\]\s*,', chunk, re.S)
        if body:
            item['body'] = [p.replace("\\'", "'") for p in re.findall(r"'((?:\\'|[^'])*)'", body.group(1))]
        if 'slug' in item and 'title' in item:
            items.append(item)
    return items


def parse_clients(text: str) -> list[dict]:
    clients = []
    for m in re.finditer(
        r"\{\s*src:\s*'([^']+)',\s*name:\s*(?:\"([^\"]+)\"|'((?:\\'|[^'])*)')\s*\}",
        text,
    ):
        name = m.group(2) if m.group(2) is not None else m.group(3).replace("\\'", "'")
        clients.append({'src': m.group(1), 'name': name})
    return clients


def main():
    services = parse_js_string_props((ROOT / 'client/src/data/servicesData.js').read_text(encoding='utf-8'))
    insights = parse_js_string_props((ROOT / 'client/src/data/insightsData.js').read_text(encoding='utf-8'))
    clients = parse_clients((ROOT / 'client/src/data/clientLogos.js').read_text(encoding='utf-8'))

    data = {'services': services, 'insights': insights, 'clients': clients}
    OUT.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding='utf-8')
    print(f'Wrote {OUT}')
    print(f'  services={len(services)} insights={len(insights)} clients={len(clients)}')


if __name__ == '__main__':
    main()
