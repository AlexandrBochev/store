import { ReactNode } from "react";
import { ThemeProvider } from "./theme-provider";

type ProvidersProps = {
  children: ReactNode;
};

function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider
      attribute='class'
      defaultTheme='system'
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
}
export default Providers;