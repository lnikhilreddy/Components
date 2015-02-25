/**
 * @class CQ.Ext.form.HertzRichText
 * @extends CQ.Ext.form.Field
 *          <p>
 *          Dual Field widget.
 *          </p>
 * @constructor Create a new LinkField
 * @param {Object}
 *            config The config object
 * @xtype LinkField
 */
CQ.Ext.form.HertzRichText = CQ.Ext.extend(CQ.Ext.form.Field, {

    defaultAutoCreate : {
         tag   : "div"
    },

    initComponent : function() {
        CQ.Ext.form.HertzRichText.superclass.initComponent.call(this);

    },

    onRender : function(ct, position) {
        CQ.Ext.form.HertzRichText.superclass.onRender.call(this, ct, position);

        this.htmleditor   = new CQ.Ext.form.HtmlEditor({
            hideMode: 'visibility',
            anchor: '100% 100%',
            hideLabel: true,
            deferredRender: false,
             enableColors      : false
            ,enableAlignments  : false
            ,enableFontSize    : false
            ,enableFont        : false
            ,enableLists       : false
            ,enableSourceEdit  : false
            ,enableLinks       : false
            ,fontFamilies      : ['Arial','Courier New','Geneva','Helvetica','Helvetica Neue','Monospace','Sans Serif','Symbol','Tahoma','Times New Roman','Trebuchet MS','Verdana','Wingdings']
            ,fontSizes         : ['8px','9px','10px','11px','12px','13px','14px','16px','18px','20px','22px','24px','26px','28px','36px','48px','72px']
            //,defaultFont       : 'tahoma'
            ,width   : '800'
            ,height  : '800'
            ,plugins : [

            ]
        });

        var panel = new CQ.Ext.Panel({
      		frame: false,
            height: 800,
            width: 900,
            layout: 'fit'
        });

        panel.add(this.htmleditor);
        panel.render(this.el);

        var hiddenTag = {
            tag : "input",
            type : "hidden",
            value : "",
            name : this.name
        };
        this.hiddenField = this.el.createChild(hiddenTag);

        //var tb = panel.body.first();
        //panel.body.removeClass();

    this.el.setWidth(panel.body.first().getWidth());
        var dialog = this.findParentByType("dialog");
        if (dialog) { 
          dialog.on("beforesubmit", this.onTextChange, this)
        }
    
    },

    onTextChange : function(vw, index, node, e) {
    var txt = this.htmleditor.getValue();
        this.hiddenField.dom.value = txt;

    },

    setValue : function(val) {
        CQ.Ext.form.HertzRichText.superclass.setValue.apply(this, arguments);
        this.hiddenField.dom.value = val;
         if (this.hiddenField.dom.value !== undefined) {
      this.htmleditor.setValue(val);
         } else {
             this.htmleditor.setValue("emptytext");
         }

    }

});

CQ.Ext.reg("htz-richtext", CQ.Ext.form.HertzRichText);

CQ.Ext.ns("Htz.AEM.PathField");

//asc=true for ascending order and asc=false for descending order
Htz.AEM.PathField.sortTags =  function(pathfield, asc){

    pathfield.browseDialog.treePanel.on('load', function(node) {
        node.childNodes.sort(function(a,b){
            a = a["text"].toLowerCase();
            b = b["text"].toLowerCase();
            return asc ? ( a > b ? 1 : (a < b ? -1 : 0) ) : ( a > b ? -1 : (a < b ? 1 : 0) ) ;
        });
    })
};