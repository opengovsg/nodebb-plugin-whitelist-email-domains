# NodeBB Whitelist Email Domains

For private forums, it may be necessary to restrict email registration to a specified set of email domains.

This plugin allows you to whitelist a set of domain names that are allowed to register. All other domain names will be blocked.

## Installation Guide for Administrators

1. Go to your plugin dashboard found at https://YOUR_DOMAIN/admin/extend/plugins#download
2. Search for "Whitelist Email Domains"
3. Beside the plugin name, click "Install"
4. Activate the plugin
5. Click on "Dashboard" or go to https://YOUR_DOMAIN/admin/dashboard. You will need to "REBUILD & RESTART" your NodeBB instance.
6. Go to the "Whitelist Email Domains" plugin page. You can find it under "Plugins" > "Whitelist Email Domains". Or directly access it here: http://localhost:4567/admin/plugins/whitelist-email-domains
7. Enter your whitelisted domains, one domain per line.
8. Pro Tip: You can use regex for wildcard subdomain whitelisting. E.g. ^[a-zA-Z0-9.].+gov.sg$ allows all subdomains of `gov.sg`.
