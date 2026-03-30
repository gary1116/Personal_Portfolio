# Personal_Portfolio
A modern and responsive personal portfolio website built using Next.js, Tailwind CSS, and Framer Motion to showcase my projects, technical skills, and professional experience. Features smooth animations, optimized performance, and a clean user interface highlighting my work in full-stack and AI-based applications.

A      @      76.76.21.21
CNAME  www    cname.vercel-dns.com

 1. What is DNS (big picture)

    Think of DNS like:

    Internet Phonebook

    Humans use:

    garymeledath.com

    Computers use:

    216.198.79.1 (IP address)

    So DNS does:

    Domain → IP address mapping

 2. What is an IP Address?

    Example you saw:

    216.198.79.1

    This is the actual server location
    Think:
    Domain = name of restaurant
    IP = exact GPS location

 3. What is an A Record?
        Definition:
        A record = Domain → IP address
        Example:
        Type: A
        Name: @
        Value: 216.198.79.1

    Means:

    garymeledath.com → 216.198.79.1
    Important:
    @ = root domain (garymeledath.com)
    Direct mapping to server

 4. What is a CNAME Record?
        Definition:
        CNAME = Domain → Another Domain
        Example:
        Type: CNAME
        Name: www
        Value: cname.vercel-dns.com

    Means:

    www.garymeledath.com → cname.vercel-dns.com

    Then Vercel handles the rest

    Think like this:
    A Record → direct address
    CNAME → redirect to another domain

    
 5. What are Nameservers? (MOST IMPORTANT)

This is the part you struggled with 👇

    Definition:
    Nameservers = Who controls your DNS records
    In your case:

- Before:

    GoDaddy controlled DNS
    ns21.domaincontrol.com
    ns22.domaincontrol.com

- After:

    Vercel controls DNS
    ns1.vercel-dns.com
    ns2.vercel-dns.com
     Think like this:
    Nameserver = DNS manager

- Whoever is the nameserver:

    controls A records
    controls CNAME
    controls routing