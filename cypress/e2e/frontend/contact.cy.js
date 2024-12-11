before(() => {
    // Poderia colocar aqui todo o processo de login;
});

describe('Estes testes possuem o objetivo de validar a página de contato', () => {

    context('País - BR', () => {

        const textosBr = ['Nome', 'Email corporativo', 'Telefone', 'Empresa', 'Cargo na empresa', 'Segmento da empresa', 'Sua mensagem']

        it('Validando elementos na página', () => {
            cy.visit('/')
            cy.get('.ekit-menu-nav-link:contains("Contato")').click();
            cy.url().should('eq', 'https://grupovoalle.com.br/contato/');
            cy.get('.aux-widget-inner:contains("Entre em contato agora!")').should('be.visible')
            cy.get('.joinchat__button__open').should('be.visible')

            textosBr.forEach((texto) => {
                cy.get('.bricks-form__label').contains(texto).should('be.visible')
            })
        });

        it('Validando o envio de mensagem via contato preenchendo todo o formulário', () => {
            cy.visit('/contato')
            cy.get('#rd-text_field-lzbp9jnc').type('Eduardo Froes')
            cy.get('#rd-email_field-lzbp9jnd').type('eduardoqa@qa.com.br')
            cy.get('#rd-phone_field-lzbp9jne').type('71996678680')
            cy.get('#rd-text_field-lzbp9jnf').type('Grupo Voalle')
            cy.get('#rd-select_field-lzbp9jng').select('Gerente');
            cy.get('#rd-select_field-lzbp9jnh').select('Provedor de Serviços de Internet (ISP)')
            cy.get('#rd-text_area_field-lzbp9jni').type('Olá, gostaria de entrar em contato para realizar um orçamento')
        });
    });

    context('País - EUA', () => {

        const textosEua = ['Name', 'Corporate email', 'Telephone', 'Enterprise', 'Position in the company', 'Company segment', 'Your message']

        it('Validando elementos na página', () => {
            cy.visit('/')
            cy.get('.ekit-menu-nav-link:contains("Contato")').click();
            cy.get('a[data-gt-lang="en"]').click()
            cy.url().should('eq', 'https://grupovoalle.com.br/contato/');
            cy.get('.aux-widget-inner:contains("Entre em contato agora!")').should('be.visible')
            cy.get('.joinchat__button__open').should('be.visible')

            textosEua.forEach((texto) => {
                cy.get('.bricks-form__label').contains(texto).should('be.visible')
            })
        });

        it('Validando o envio de mensagem via contato preenchendo todo o formulário', () => {
            cy.visit('/contato')
            cy.get('a[data-gt-lang="en"]').click()
            cy.get('#rd-text_field-lzbp9jnc').type('Eduardo Froes')
            cy.get('#rd-email_field-lzbp9jnd').type('eduardoqa@qa.com.br')
            cy.get('#rd-phone_field-lzbp9jne').type('71996678680')
            cy.get('#rd-text_field-lzbp9jnf').type('Grupo Voalle')
            cy.get('#rd-select_field-lzbp9jng').select('Manager');
            cy.get('#rd-select_field-lzbp9jnh').select('Internet Service Provider (ISP)')
            cy.get('#rd-text_area_field-lzbp9jni').type('Olá, gostaria de entrar em contato para realizar um orçamento')
        });
    });

    context('País - ESP', () => {

        const textosEsp = ['Nombre', 'Correo electrónico corporativo', 'Teléfono', 'Empresa', 'Puesto en la empresa', 'Segmento de empresa', 'Tu mensaje']

        it('Validando elementos na página', () => {
            cy.visit('/')
            cy.get('.ekit-menu-nav-link:contains("Contato")').click();
            cy.get('a[data-gt-lang="es"]').click()
            cy.url().should('eq', 'https://grupovoalle.com.br/contato/');
            cy.get('.aux-widget-inner:contains("Entre em contato agora!")').should('be.visible')
            cy.get('.joinchat__button__open').should('be.visible')

            textosEsp.forEach((texto) => {
                cy.get('.bricks-form__label').contains(texto).should('be.visible')
            })
        });

        it('Validando o envio de mensagem via contato preenchendo todo o formulário', () => {
            cy.visit('/contato')
            cy.get('a[data-gt-lang="es"]').click()
            cy.get('#rd-text_field-lzbp9jnc').type('Eduardo Froes')
            cy.get('#rd-email_field-lzbp9jnd').type('eduardoqa@qa.com.br')
            cy.get('#rd-phone_field-lzbp9jne').type('71996678680')
            cy.get('#rd-text_field-lzbp9jnf').type('Grupo Voalle')
            cy.get('#rd-select_field-lzbp9jng').select('Coordinador');
            cy.get('#rd-select_field-lzbp9jnh').select('Proveedor de servicios de Internet (ISP)')
            cy.get('#rd-text_area_field-lzbp9jni').type('Olá, gostaria de entrar em contato para realizar um orçamento')
        });
    });

})