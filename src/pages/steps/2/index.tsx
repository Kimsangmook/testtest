import { Layout } from "components/layout/Layout";
import { usePreventRefresh } from "hooks/usePreventRefresh";
import { Step2Contents } from "modules/steps/2/Step2Contents";

const Step2Page = () => {
  // NOTE : 새로고침 방지
  usePreventRefresh();
  return (
    <Layout>
      <Step2Contents />
    </Layout>
  );
};

export default Step2Page;
