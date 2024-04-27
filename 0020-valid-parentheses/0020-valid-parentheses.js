/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    
    let stack = [];
    
    for (let i = 0; i < s.length; i++){

        if(s[i] === '(' || s[i] === '{' || s[i] === '['){
        stack.push(s[i]);
        }

        if (s[i] === ')'){
            let character = stack.pop();
            if (character !== '('){
                return false
            }
        }

        if (s[i] === '}'){
            let character = stack.pop();
            if (character !== '{'){
                return false
            }
        }
        if (s[i] == ']'){
            let character = stack.pop();
            if (character !== '['){
                return false
            }
        } 
    }

    if (stack.length > 0){
        return false

    }
    return true
};

