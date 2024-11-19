import toast, { Toaster } from "react-hot-toast";


// Get all Gadgets from Local Storage
const getAllGadgets = () => {
    const all = localStorage.getItem("cart");

    if (all) {
        const gadgets = JSON.parse(all);
        // console.log(gadgets);
        return gadgets;
    } else {
        // console.log([]);
        return [];
    }
};


// Add a Gadget to Local Storage
const addCart = gadget => {
    const cart = getAllGadgets();
    const isExist = cart.find(item => item.id === gadget.id);
    if (isExist) return toast.error('Gadget Already Exist!');
    // console.log(cart);
    cart.push(gadget);
    localStorage.setItem("cart", JSON.stringify(cart));
    toast.success('Successfully Gadget Added!');
};


export { addCart };
export { getAllGadgets };