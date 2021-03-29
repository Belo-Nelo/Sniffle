class Sniffle {
    constructor() {}
    
    getInfo() {
        return {
            id: 'Sniffle',
            name: 'Sniffle',
            blocks: [{
                
                    opcode: 'nothing',
                    blockType: 'reporter',
                    text: 'nothing',
                    arguments: {},         
            }]
        
        }
    
    }

}

nothing() {
    return 'nothing'

}
Scratch.extensions.register(new Sniffle())
