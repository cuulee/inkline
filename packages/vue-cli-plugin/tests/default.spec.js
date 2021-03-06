import generator from '../generator';
import { vueCLIBuild } from "./jest/helpers/vueCLIBuild";

describe('Vue CLI Module', () => {
    it('should build plugin with default config', vueCLIBuild('main.default', generator));

    it('should build typescript plugin with default config', vueCLIBuild('main.default', generator, { typescript: true }));
});
