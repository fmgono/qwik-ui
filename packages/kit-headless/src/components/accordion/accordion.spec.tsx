import { Accordion, AccordionItem } from './accordion';

describe('Accordion', () => {
  it('should render an Accordion', () => {
    cy.mount(
      <Accordion class="accordion">
        <AccordionItem label="Heading 1">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
            aliquid architecto delectus deleniti dolor
          </p>
        </AccordionItem>
        <AccordionItem label="Heading 2">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
            aliquid architecto delectus deleniti dolor
          </p>
        </AccordionItem>
      </Accordion>
    );

    cy.contains(/Heading 1/i).click();
    cy.get('.content').should('exist');
    cy.contains(/Heading 2/i).should('exist');

    cy.checkA11yForComponent();
  });
});
