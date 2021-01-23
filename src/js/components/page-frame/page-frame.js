import PageFooter from "./page-header/page-footer"
import PageHeader from "./page-header/page-header"

export default function PageFrame({ children }) {
  return (
    <div>
      <PageHeader />
      {children}
      <PageFooter />
    </div>
  );
}
