import Heading from '../../components/heading';
import Works from '../../components/works';
import SectionDiv from '../../components/sectiondiv';
import Page from '../../components/layouts/page';

export default function MyWorks() {
  return (
    <Page>
      <SectionDiv>
        <Heading title='works' />
        <Works />
      </SectionDiv>
    </Page>
  );
}
