#!/usr/bin/env python3
"""
Extract sections from snackverseHTML.ts and convert to JSX components.
Converts: class -> className, SVG attributes, self-closing tags
"""

import re

def html_to_jsx(html_str):
    """Convert HTML string to JSX"""
    # Remove <style> tags and their content
    html_str = re.sub(r'<style[^>]*>.*?</style>', '', html_str, flags=re.DOTALL)
    
    # Remove <script> tags and their content
    html_str = re.sub(r'<script[^>]*>.*?</script>', '', html_str, flags=re.DOTALL)
    
    # Convert class to className
    html_str = re.sub(r'\bclass=', 'className=', html_str)
    
    # Convert SVG attributes
    html_str = re.sub(r'\bfill-rule=', 'fillRule=', html_str)
    html_str = re.sub(r'\bclip-rule=', 'clipRule=', html_str)
    html_str = re.sub(r'\bstroke-width=', 'strokeWidth=', html_str)
    html_str = re.sub(r'\bcolor-interpolation-filters=', 'colorInterpolationFilters=', html_str)
    html_str = re.sub(r'\bfilter-units=', 'filterUnits=', html_str)
    html_str = re.sub(r'\bstd-deviation=', 'stdDeviation=', html_str)
    html_str = re.sub(r'\bflood-opacity=', 'floodOpacity=', html_str)
    html_str = re.sub(r'\bdata-slick-index=', 'dataSlickIndex=', html_str)
    html_str = re.sub(r'\baria-hidden=', 'ariaHidden=', html_str)
    html_str = re.sub(r'\baria-describedby=', 'ariaDescribedby=', html_str)
    html_str = re.sub(r'\bdata-wp-strategy=', 'dataWpStrategy=', html_str)
    
    # Make self-closing tags
    html_str = re.sub(r'<img([^>]*?)(?<!/)>', r'<img\1 />', html_str)
    html_str = re.sub(r'<source([^>]*?)(?<!/)>', r'<source\1 />', html_str)
    html_str = re.sub(r'<input([^>]*?)(?<!/)>', r'<input\1 />', html_str)
    html_str = re.sub(r'<br([^>]*?)(?<!/)>', r'<br\1 />', html_str)
    html_str = re.sub(r'<hr([^>]*?)(?<!/)>', r'<hr\1 />', html_str)
    html_str = re.sub(r'<meta([^>]*?)(?<!/)>', r'<meta\1 />', html_str)
    html_str = re.sub(r'<link([^>]*?)(?<!/)>', r'<link\1 />', html_str)
    
    # Fix SVG self-closing tags
    html_str = re.sub(r'<path([^>]*?)(?<!/)>', r'<path\1 />', html_str)
    html_str = re.sub(r'<rect([^>]*?)(?<!/)>', r'<rect\1 />', html_str)
    html_str = re.sub(r'<circle([^>]*?)(?<!/)>', r'<circle\1 />', html_str)
    html_str = re.sub(r'<g([^>]*?)(?<!/)>', r'<g\1>', html_str)  # g tags need closing
    html_str = re.sub(r'<defs([^>]*?)(?<!/)>', r'<defs>', html_str)
    html_str = re.sub(r'<filter([^>]*?)(?<!/)>', r'<filter>', html_str)
    html_str = re.sub(r'<feflood([^>]*?)(?<!/)>', r'<feflood\1 />', html_str)
    html_str = re.sub(r'<feblend([^>]*?)(?<!/)>', r'<feblend\1 />', html_str)
    html_str = re.sub(r'<fegaussianblur([^>]*?)(?<!/)>', r'<fegaussianblur\1 />', html_str)
    
    return html_str

# Read the HTML file
with open('src/app/snackverseHTML.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Extract the HTML string
match = re.search(r'export const snackverseHtml = `([\s\S]+)`', content)
if not match:
    print("Could not find snackverseHtml")
    exit(1)

html_content = match.group(1)

# Define section boundaries (approximate line numbers in the HTML string)
# We'll search for specific markers
sections = {
    'header': {
        'start': '<div className="menu__wrapper',
        'end': '</div>',  # Need to find the right closing div
    },
    'hero': {
        'start': '<div className="hero flex flex-col',
        'end': '</div><style>',  # Before the style tag
    },
    'truststrip': {
        'start': '<div className="revealMarquee marquee',
        'end': '</div>',  # After second marquee
    },
    'howitworks': {
        'start': '<div className="bg-lightred py-14',
        'end': '</div>',  # After the how it works section
    },
    'productsections': {
        'start': '<div className="mx-auto max-w-90',  # "Join the SnackVerse" section
        'end': '<div className="flex flex-col pt-14',  # Before "Give 5 Get £5"
    },
    'reviews': {
        'start': '<div className="max-w-full w-full flex flex-col py-14',  # TrustPilot section
        'end': '<div className="mx-auto flex flex-col lg:flex-row',  # Before newsletter
    },
    'faq': {
        'start': '<div className="relative py-14 pb-10 md:py-20',  # FAQ section start
        'end': '</div>    ',  # After FAQ section
    },
    'footer': {
        'start': '<footer className="bg-purple',
        'end': '</footer>',
    }
}

# Extract and convert each section
def extract_section(html, start_marker, end_marker):
    start_idx = html.find(start_marker)
    if start_idx == -1:
        return None
    
    # Find the matching end
    if end_marker:
        end_idx = html.find(end_marker, start_idx)
        if end_idx == -1:
            # Try to find closing tag
            depth = 0
            i = start_idx
            while i < len(html):
                if html[i:i+6] == '<div ' or html[i:i+7] == '<div\n':
                    depth += 1
                elif html[i:i+7] == '</div>':
                    depth -= 1
                    if depth == 0:
                        end_idx = i + 7
                        break
                i += 1
            if end_idx == -1:
                return None
    else:
        end_idx = len(html)
    
    return html[start_idx:end_idx]

# For now, let's manually extract based on what we know
print("Extracting sections...")

# This is a complex extraction, so let's do it manually for each component
# We'll read the file and extract sections directly
