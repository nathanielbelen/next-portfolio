import Heading from '../components/heading';
import Works from '../components/works';
import Section from '../components/section';
import Page from '../components/layouts/page';

export default function MyWorks() {
  return (
    <Page>
      <Section>
        <Heading title='works' />
        <Works />
      </Section>
    </Page>
  );
}