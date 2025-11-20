/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://fredericchastelas.com',
    generateRobotsTxt: false, // On garde le robots.txt existant
    generateIndexSitemap: false, // Pas besoin de sitemap index pour un petit site
    exclude: ['/admin', '/admin/*'],
    changefreq: 'weekly',
    priority: 0.7,
    sitemapSize: 5000,

    // Configuration des priorités par page
    transform: async (config, path) => {
        // Pages principales avec priorité haute
        if (path === '/' || path === '/home') {
            return {
                loc: path,
                changefreq: 'weekly',
                priority: 1.0,
                lastmod: new Date().toISOString(),
            }
        }

        // Pages de services importantes
        if ([
            '/regulation-emotionnelle-tipi',
            '/coaching-en-entreprise',
            '/stages-et-cours',
            '/a-propos'
        ].includes(path)) {
            return {
                loc: path,
                changefreq: 'monthly',
                priority: 0.9,
                lastmod: new Date().toISOString(),
            }
        }

        // Page contact
        if (path === '/contact') {
            return {
                loc: path,
                changefreq: 'monthly',
                priority: 0.8,
                lastmod: new Date().toISOString(),
            }
        }

        // Autres pages
        return {
            loc: path,
            changefreq: config.changefreq,
            priority: config.priority,
            lastmod: new Date().toISOString(),
        }
    },
}
