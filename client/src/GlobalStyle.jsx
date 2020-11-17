import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
	${normalize}

	body {
		margin: 0;
		font-family: 'Open Sans', sans-serif;
		font-size: 62.5%;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	code {
		font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
		monospace;
	}
`;
