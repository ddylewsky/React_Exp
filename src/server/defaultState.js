export const defaultState = {
    users:[{
        id:"U1",
        name:"Dev"
    },{
        id:"U2",
        name:"C. Eeyo"
    }],
    groups:[{
        name:"To Do",
        id:"G1",
        owner:"U1"
    },{
        name:"Doing",
        id:"G2",
        owner:"U1"
    },{
        name:"Done",
        id:"G3",
        owner:"U1"
    }],
    tasks:[{
        name: "Do tests",
        id:"T1",
        group:"G1",
        owner:"U1",
        isComplete:false
    },{
        name: "Refactor testing",
        id:"T2",
        group:"G1",
        owner:"U1",
    }],
    comments:[{
        owner:"U1",
        id:"C1",
        task:"T1",
        content:"Great work!!"
    }]
}