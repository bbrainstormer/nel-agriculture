G.AddData({
name:'agriculture mod',
author:'bbrainstormer',
desc:'Adds somewhat realistic agricultural mechanics, and a couple unadded things from the original neverending legacy",
engineVersion:1,
manifest:0,
func:function() {
    //Adds a new food item: grass.  Not very tasty or healthy, but better than spoiled food
	new G.res({
        name: 'grass blades',
        desc: 'simple [grass blades,blades of grass].  Not very nutritious, but better than starving.',
        turnToByContext:{'eat':{'health':-0.2,'happiness':-0.3},'decay':{'spoiled food':0}}, //Decays into nothing
        partOf: 'food',
        category: 'food',
    }
    
    //Gather grass blades from, well, grass
    G.getDict('grass').res['gather']['grass blades'] = 15;

    //Since grass blades are an awful food source, we need to be able to disable that
    //We don't want it dragging health & happiness down
    new G.Policy({
        name: 'eat grass',
        desc: 'enables/disables the eating of [grass blades]',
        cost: {'influence':1},
        startMode: 'off',
        req:{'rules of food':true},
        effects:[
			{type:'make part of',what:['grass blades'],parent:'food'},
		],
		effectsOff:[
			{type:'make part of',what:['grass blades'],parent:''},
		],
		category:'food'
}
});
