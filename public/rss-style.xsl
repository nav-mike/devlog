<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title><xsl:value-of select="rss/channel/title"/> - RSS Feed</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <style type="text/css">
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
          }
          .header {
            margin-bottom: 2em;
            padding-bottom: 1em;
            border-bottom: 1px solid #eee;
          }
          h1 {
            color: #2c3e50;
            margin-bottom: 0.5em;
          }
          .description {
            color: #7f8c8d;
            font-size: 1.1em;
            margin-bottom: 1em;
          }
          .meta {
            font-size: 0.9em;
            color: #95a5a6;
            margin-bottom: 2em;
          }
          .item {
            margin-bottom: 2em;
            padding-bottom: 1em;
            border-bottom: 1px solid #f0f0f0;
          }
          .item:last-child {
            border-bottom: none;
          }
          .item h2 {
            margin: 0 0 0.5em 0;
          }
          .item h2 a {
            color: #3498db;
            text-decoration: none;
          }
          .item h2 a:hover {
            text-decoration: underline;
          }
          .item-meta {
            font-size: 0.85em;
            color: #95a5a6;
            margin-bottom: 0.5em;
          }
          .item-description {
            margin: 0.5em 0;
          }
          .item-categories {
            font-size: 0.8em;
            margin-top: 0.5em;
          }
          .item-categories a {
            display: inline-block;
            background: #f1f3f5;
            color: #495057;
            padding: 0.2em 0.6em;
            border-radius: 3px;
            margin-right: 0.5em;
            margin-bottom: 0.5em;
            text-decoration: none;
          }
          .item-categories a:hover {
            background: #e9ecef;
          }
          .footer {
            margin-top: 3em;
            padding-top: 1em;
            border-top: 1px solid #eee;
            font-size: 0.9em;
            color: #7f8c8d;
            text-align: center;
          }
        </style>
      </head>
      <body>
        <div class="header">
          <h1><xsl:value-of select="rss/channel/title"/></h1>
          <div class="description"><xsl:value-of select="rss/channel/description"/></div>
          <div class="meta">
            <div>Updated: <xsl:value-of select="rss/channel/lastBuildDate"/></div>
            <div><a href="{rss/channel/link}">View on website</a></div>
          </div>
        </div>
        
        <div class="items">
          <xsl:for-each select="rss/channel/item">
            <div class="item">
              <h2><a href="{link}" target="_blank"><xsl:value-of select="title"/></a></h2>
              <div class="item-meta">
                <span class="date"><xsl:value-of select="pubDate"/></span>
                <xsl:if test="author">
                  <span> • </span>
                  <span class="author"><xsl:value-of select="author"/></span>
                </xsl:if>
              </div>
              <div class="item-description">
                <xsl:value-of select="description" disable-output-escaping="yes"/>
              </div>
              <xsl:if test="category">
                <div class="item-categories">
                  <xsl:for-each select="category">
                    <a href="#"><xsl:value-of select="."/></a>
                  </xsl:for-each>
                </div>
              </xsl:if>
            </div>
          </xsl:for-each>
        </div>
        
        <div class="footer">
          <p>Subscribe to this feed: <a href="rss.xml">RSS</a> | <a href="atom.xml">Atom</a></p>
          <p>© <xsl:value-of select="substring(rss/channel/copyright, 1, 4)"/> <xsl:value-of select="rss/channel/managingEditor"/></p>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
