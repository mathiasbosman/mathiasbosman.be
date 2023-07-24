describe('Happy paths', () => {

  const publicTestPages = ['/about', '/experiences', '/projects']
  const allPages = ['/', ...publicTestPages]

  function _navigate(path: string): void {
    cy.get('nav')
    .filter(':visible')
    .find('a[href="'+path+'"]')
    .click()
  }

  it('All pages can be visited directly', () => {
    allPages.forEach(page => {
      cy.visit(page)
      cy.screenshot()
    })
  })

  it('User can navigate back home from each public page', () => {
    cy.visit('/')
    publicTestPages.forEach(path => {
      _navigate(path)
      cy.get('header a[href="/"]').click()
    })
  })

  it('User can navigate back and forth between public pages', () => {
    cy.viewport(800,600)
    publicTestPages.forEach(currentPath => {
      cy.visit(currentPath)
      // navigate via ui to other page
      publicTestPages.filter(link => link !== currentPath)
      .forEach(link  => {
        cy.log('Navigation from ' + currentPath + ' to ' + link)
        _navigate(link)
        // return to starting point
        cy.visit(currentPath)
      })
    })
  })

  it('All outgoing links should be reachable', () => {

    interface testedLink {
      href: string,
      page: string
    }
    const checkedLinks: testedLink[] = []
    allPages.forEach(page => {
      cy.visit(page)
      cy.get(`a[href^="http://"],a[href^="https://"]`).each((link) => {
        const testingLink: testedLink = {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          href: link.prop(`href`),
          page: page
        }
        const alreadyChecked = checkedLinks.find(
          link => link.href === testingLink.href)

        if (alreadyChecked === undefined) {
          cy.request({
            failOnStatusCode: false,
            url: testingLink.href,
          })
          .its(`status`)
          .should(`not.eq`, 404)
          checkedLinks.push(testingLink)
        } else {
          cy.log(alreadyChecked.href + ' already tested in ' + alreadyChecked.page)
        }
      })
    })
  })

})
