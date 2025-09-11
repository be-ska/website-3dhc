#!/usr/bin/env python3
import csv
import sys


def title_case(s: str) -> str:
    """Convert string to title case: first letter upper, rest lower."""
    return " ".join(w.capitalize() for w in s.strip().lower().split())


def get_category(comp: str) -> str:
    """Extract category from competition field."""
    c = comp.strip().lower()
    if c.startswith("sport"):
        return "Sport"
    if c.startswith("advanced"):
        return "Advanced"
    if c.startswith("funfly"):
        return "FunFly"
    return ""


def parse_sponsors(s: str) -> list[str]:
    """Split sponsors by comma, title-case each, preserve empty entry."""
    if not s or not s.strip():
        return [""]
    parts = [p.strip() for p in s.split(",")]
    return [title_case(p) for p in parts if p]


def generate_js(entries: list[dict]) -> str:
    """Given normalized pilot dicts, return a JS export string."""
    lines = ["export const pilots = ["]
    for e in entries:
        lines.append("    {")
        lines.append(f'        name: "{e["name"]}",')
        lines.append(f'        country: "{e["country"]}",')
        lines.append(f'        age: "{e["age"]}",')
        lines.append("        helicopter: {")
        lines.append(f'            manufacturer: "{e["helicopter"]["manufacturer"]}",')
        lines.append(f'            model: "{e["helicopter"]["model"]}"')
        lines.append("        },")
        lines.append("        sponsors: [")
        for s in e["sponsors"]:
            lines.append(f'            "{s}",')
        lines.append("        ],")
        lines.append(f'        link: "{e["link"]}",')
        lines.append(f'        category: "{e["category"]}"')
        lines.append("    },")
    lines.append("];")
    return "\n".join(lines)


def main():
    """
    Usage: python generate_pilots_js.py pilots.csv
    Reads the CSV, processes each row, and prints a JS block to stdout.
    """
    if len(sys.argv) < 2:
        print("Usage: python generate_pilots_js.py <input.csv>", file=sys.stderr)
        sys.exit(1)

    infile = sys.argv[1]
    with open(infile, newline="", encoding="utf-8") as f:
        reader = csv.DictReader(f)
        pilots = []
        for row in reader:
            name = f"{row['First Name - Nome'].strip()} {row['Last Name - Cognome'].strip()}"
            country = row["Country - Nazionalità"].strip()
            age = row["Age - Età"].strip()
            comp = row["Competition - Competizione"]
            manuf = title_case(row["Helicopter manufacturer - Marca elicottero"])
            model = row["Helicopter model - Modello elicottero"].strip().upper()
            sponsors = parse_sponsors(row["Sponsors"])
            link = row.get(
                "Social page link - Link a una tua pagina social (Facebook, Instagram, Youtube, ...)",
                "",
            ).strip()
            category = get_category(comp)
            pilots.append(
                {
                    "name": name,
                    "country": country,
                    "age": age,
                    "helicopter": {"manufacturer": manuf, "model": model},
                    "sponsors": sponsors,
                    "link": link,
                    "category": category,
                }
            )

    js_output = generate_js(pilots)
    print(js_output)


if __name__ == "__main__":
    main()
