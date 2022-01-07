function replaceCSSComments() {
  return str.replace(/\/\*.*?\/\s?/g,'');
}
console.log(replaceCSSComments('код без /*комментарий*/ комментов'));
console.log(replaceCSSComments('код бе/*коммент1*/з ком/* коммент2 */ментов'));
console.log(replaceCSSComments('код /*к1*/ без /* к2 */ коммент/*к3*/ов'));

function replaceHTMLComments() {
  return str.replace(/\<\!\-\-*.*?\-\-\>\s*/g, '')
}
console.log(replaceHTMLComments('<!--коммент1--> код без комментов <!--коммент2-->')); console.log(replaceHTMLComments('<!--к1--> код <!-- к2 --><!-- к3 --> без <!-- к4 --> комментов'));
console.log(replaceHTMLComments('код <!--к1--> без <!-- к2 --> комментов'));

