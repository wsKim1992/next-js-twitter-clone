import Document, {
  type DocumentContext,
  Html,
  Head,
  NextScript,
  Main,
} from "next/document";
import { css } from "@stitches/react";

class NewDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const originalRenderPage = ctx.renderPage;
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => <App {...props} />,
        enhanceComponent: (Component) => Component,
      });
    const initialProps = await Document.getInitialProps(ctx);
    console.log({ initialProps });
    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          <style id="stitches" dangerouslySetInnerHTML={{ __html: css() }} />
        </>
      ),
    };
  }
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default NewDocument;
