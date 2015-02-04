var IracComponents = IracComponents || {};

/**
 * SerializedField widget. Contains multiple sub-fields whose values are serialized into one value
 * separated by a delimiter character (pipe by default).
 *
 * @author s.hoogenberk@repix.ch
 * @extends CQ.form.CompositeField
 */
IracComponents.DynamicMultifield = CQ.Ext.extend(CQ.form.CompositeField, {

    hiddenField: null,
    delimiter: '|',
    layout: 'form',
    anchor: '100%',
    padding: 5,
    defaults: {
        hideLabel: true,
        anchor: '100%',
        flex: 1
    },

    /**
     * @override
     */
    initComponent: function() {
        var me = this;
        CQ.form.SerializedField.superclass.initComponent.call(this);
        CQ.Ext.each(this.getFieldItems(), function(field/*, index*/) {
            field.on('change', me.updateHidden, me);
            field.on('selectionchanged', me.updateHidden, me);
            field.on('dialogclose', me.updateHidden, me);
        });
        this.hiddenField = new CQ.Ext.form.Hidden({
            name: this.name
        });
        this.add(this.hiddenField);
    },

    /**
     * @private
     */
    updateHidden: function() {
        this.hiddenField.setValue(this.getValue());
    },

    /**
     * Get value
     * @returns {String} Value
     */
    getValue: function() {
        return this.getRawValue();
    },

    /**
     * Get raw value
     * @returns {string} Raw value
     */
    getRawValue: function() {
        var me = this, values = [];
        CQ.Ext.each(this.getFieldItems(), function(field/*, index*/) {
            if (field.name != me.name) {
                values.push(field.getValue());
            }
        });
        return values.join(this.delimiter);
    },

    /**
     * Set value
     * @param {String} value Value
     */
    setValue: function(value) {
        var me = this;
        var values = (value) ? value.split(this.delimiter) : [];
        CQ.Ext.each(this.getFieldItems(), function(field, index) {
            if (field.name != me.name && values.length > index) {
                field.setValue(values[index]);
            }
        });
        this.hiddenField.setValue(value);
    },

    /**
     * Get field items
     */
    getFieldItems: function() {
    	var fieldItems = [];
        this.items.each(function(field, index) {
            if (field.getValue && field.setValue) {
                fieldItems.push(field);
            }
        });
        return fieldItems;
    }
});
CQ.Ext.reg("slideshow", IracComponents.DynamicMultifield);
