// JS uses lexical scoping (static scoping)
// Local Scope - Define inside a code block
// Global Scope - Defined outside of all code blocks

// In a scope you can access variables defined in that scope, or in any parent/ancestor scope.

// Global Scope (varOne)
  // Local Scope (varTwo)
    // Local Scope (varFour)
  // Local Scope (varThree)

  let varOne = 'varOne'

  if (true) {
      console.log(varOne)
      let varTwo = 'varTwo'
      console.log(varTwo)

    if (true) {
        let varFour = 'varFour'
    }
  }

  if (true) {
      let varThree = 'varThree'
  }

  console.log(varTwo)