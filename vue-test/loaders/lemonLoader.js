module.exports = function (source) {
  return `<script>
  import Lemon from 'lemon';
  
  export default Lemon(${source})</script>`

  // return source;
}
