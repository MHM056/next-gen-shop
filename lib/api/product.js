export async function addProduct(itemData) {
    const res = await fetch("/api/add-product", {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(itemData),
        credentials: "include"
    });

    const data = await res.json();

    if(!res.ok) {
        throw new Error(data.error || "Something went wrong");
    }

    return data;
}