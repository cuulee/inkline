import Linkable from '../Linkable';

import DisabledPropertyMixin from '@inkline/inkline/mixins/components/properties/DisabledPropertyMixin';
import TabIndexPropertyMixin from '@inkline/inkline/mixins/components/properties/TabIndexPropertyMixin';

import AttributesProviderMixin from '@inkline/inkline/mixins/components/providers/AttributesProviderMixin';
import ClassesProviderMixin from '@inkline/inkline/mixins/components/providers/ClassesProviderMixin';
import EmitProviderMixin from '@inkline/inkline/mixins/components/providers/EmitProviderMixin';

export default {
    name: 'IDropdownItem',
    extends: Linkable,
    mixins: [
        DisabledPropertyMixin,
        TabIndexPropertyMixin,

        AttributesProviderMixin,
        ClassesProviderMixin,
        EmitProviderMixin
    ],
    props: {
        action: {
            type: [String, Number, Boolean],
            default: undefined
        },
        tabindex: {
            type: [Number, String],
            default: -1
        }
    },
    methods: {
        onClick() {
            this.dispatch('IDropdown', 'menu-item-click', [this.action, this]);
        }
    },
    mounted() {
        this.dispatch('IDropdown', 'dropdown-item-mounted', this);
    },
    destroyed() {
        this.dispatch('IDropdown', 'dropdown-item-destroyed', this);
    }
};
