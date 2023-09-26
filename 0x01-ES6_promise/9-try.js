export default function guardrail(func) {
    let queue = []
    try{
	queue.push(func())
    } catch(err) {
	queue.push(err)
	console.log(err)
    }
}
