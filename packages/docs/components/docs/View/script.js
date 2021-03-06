import { ITable } from "@inkline/inkline/src/index";
import IApiPreview from '../ApiPreview';
import IScssPreview from '../ScssPreview';
import ICodePreview from '../CodePreview';
import ApiTable from '../ApiTable';
import ApiTableRow from '../ApiTableRow';

export default {
    name: 'View',
    components: {
        ApiTable,
        ApiTableRow,
        ICodePreview,
        IApiPreview,
        IScssPreview,
        ITable
    },
    mounted() {
        this.$nuxt.$emit('viewLoaded');
    }
};
