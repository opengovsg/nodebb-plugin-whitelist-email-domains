const isWhitelistedDomain = (email, whitelistedDomains) => {
  var domain = email.substring(email.indexOf('@') + 1);
  var lines = whitelistedDomains.trim().split('\n');

  for (var i = 0; i < lines.length; i++) {
    let domainRegEx = new RegExp(lines[i].trim());
    if (domain.match(domainRegEx)) {
      return true;
    }
  }

  return false;
}

module.exports = isWhitelistedDomain