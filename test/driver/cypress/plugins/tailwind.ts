before(() => {
  cy.exec('npx tailwind -i ../../../src/shared/index.css -m').then(
    ({ stdout }) => {
      if (!document.head.querySelector('#tailwind-style')) {
        const link = document.createElement('style')
        link.id = 'tailwind-style'
        link.innerHTML = stdout
        document.head.append(link)
      }
    }
  )
})
