/**
 * @typedef Prop
 * @property {string} [selector=.template-node] The selector of the element.
 */

/**
 * @author Anthony Bobrov {@link link| GitHub}
 * 
 * Description
 * @param {Prop} prop 
 */
function templateNode(prop = {}) {
    

    // extend properties
    const DEFAULT_PROP = {
        selector: '.template-node',
    };
    prop = Object.assign(DEFAULT_PROP, prop);


    
}

export default templateNode;