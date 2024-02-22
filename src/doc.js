/// =============>component dan props
//class component dan functional component
// props children berdasarkan childnya
//props bisa mengatur nilai default value

// ============================================
// class Button extends React.Component {
//   render() {
//     return (
//       <button className="h-10 px-8 font-semibold rounded-md bg-black text-white">
//         Buy Now
//       </button>
//     );
//   }
// }

/// ==================> Atomic design
// atom-molekul-template-page
// reusable
//Untuk Pages menggunakan huruf kecil karena untuk nanti routing

/// ===================> React Router
// (react-router-dom) || file utama di main
// createBrowserRouter,RouterProvider,router
// routerprovider harus memiliki prop router
// jika routing sudah rapih maka app jsx boleh di hapus
// {useRouterError} untuk halaman error && disimpan di path index dengan error Element

// Client Side routing(pindah url tidak perlu loading)
// mengganti a dgn Link

/// ====================> Conditional Rendering
// komponent yang sama tapi menampilkan hal yang berbeda
// {type === "login"
//               ? "Don't have an account?"
//               : "Already Have an account?"}
//             {type === "login" && (
//               <Link to="/register" className="font-bold text-blue-600">
//                 Register
//               </Link>
//             )}
//             {type === "register" && (
//               <Link to="/login" className="font-bold text-blue-600">
//                 Login
//               </Link>
//             )}

/// ==================> Nested Component
// memecah komponent didalam fragment component supaya best practice
// CardProduct.Header = Header;
// export default CardProduct;

/// ==================> Rendering List
// mapping data menjadi variable object agar tidak menggunakan data berulang

/// ===================> Event Handler
// biasanya untuk triger klik,hover,focus danakan menerima response terhadap event ini
// untuk submit biasanya merefresh halaman ==> solusi (menggunakan prevent defaul )
// menyimpan data ke localstorage (ini sementara)
// redirect menggunakan window tapi kalo mau yg gg pakai react router

/// ===================> State(memori)
// menampilkan data dinamis
// props tidak bisa berubah || state bisa berubah
// statefull component(class) dan stateless component (function)
// menggunakan state harus menggunakan class dan jika kalau mau menggunakan function (react hook)

/// ====================> React Hook
// {price.toLocaleString("id-ID", { style: "currency", currency: "idr" })} (mengubah int ke niali ur=ang rupiah)
//

// ======================> Konsep lifeCycle(Siklus react) FOR CLASS COMPONENT
// mounting,updating,unmounting || rander phase, commit phase
// untuk mengambil data tidak dilakukan di construktor tapi di function didamount

/// =====================> useEffect () FOR function component
// untuk melakukan sinkronisasi komponent
// ketika di refresh masih ada
//useEffect mempunyai dependensi didupdate

useEffect(() => {
  setCart(JSON.parse(localStorage.getItem("cart")) || []);
}, []);

useEffect(() => {
  if (cart.length > 0) {
    const sum = cart.reduce((acc, item) => {
      const product = products.find((product) => product.id === item.id);
      return acc + product.price * item.qty;
    }, 0);
    setTotalPrice(sum);
    localStorage.setItem("cart", JSON.stringify(cart));
  }
}, [cart]);

if (cart.find((item) => item.id === id)) {
  setCart(
    cart.map((item) => (item.id === id ? { ...item, qty: item.qty + 1 } : item))
  );
} else {
  setCart([...cart, { id, qty: 1 }]);
}

/// =============================> useRef
// usestate(ada set statenya) vs useref(tidak mempunyai set state) jadi harus ke currentnya
// tetapi jika untuk melakukan perubahannya harus di save di kodingan/refresh
// ==> Untuk DOM
//ref tidak bisa dikirimkan ke komponent
// menggunakan react forward ref

/// ==============================> API
// menggunakan fake store api
// library rekomendasi (axios,swr,react query)
// truncate === substring(0,200)

// login POST
// menggunakan e.target.value
// decode token get user

// CUSTOM HOOKS
// memisahkan fungsi menjadi custom
// useLogin (penamaan recomen) fungsi yang reusable

// DYNAMIC ROUTING
// useParams(riekruterdom)

// REDUX
// state(reducer(memilah payloadnya))->ui->dispatch->store
// reducer => state,action(hasil)
// store => penyimpanan hasil
// dispatch => menambahkan hasil state
// subscribe => lihat hasil dispatch   ===> DEPRECATED(using redux toolkit)

// REDUX TOOLKIT
// configureStore(>1),createAction("action"),createReducer(state,(builder)=>addcase(action,(state,action)=>state))
// Konsep slice => gabungkan antarea reducer dan action ()

// IMPL REDUX
// npm i react-redux
