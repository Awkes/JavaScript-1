/* Ett objekt som representerar en hiss,
   med hjälp av metoderna goTo() och where()
   kan hissen byta våning och visa aktuell våning
   where() returnerar även aktuellt våningsplan */

let hiss = {
    plan : 0,
    goTo : function(plan) {
        this.plan = plan;
        console.log("Hissen åker till plan " + plan + ".");
    },
    where : function() {
        console.log("Hissen är på plan " + this.plan + ".");
        return this.plan;
    }
}
hiss.goTo(13);
hiss.where();