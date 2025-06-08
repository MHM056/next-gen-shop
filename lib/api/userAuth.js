export async function registerUser({ email, password, repeatPassword }) {
    const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, repeatPassword })
    });

    const data = await res.json();

    if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
    }

    return data;
}

export async function loginUser({ email, password }) {
    const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
    });

    const data = await res.json();

    if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
    }

    return data;
}

export async function logoutUser() {
    await fetch("/api/logout", { method: "GET" });
}

export async function createUser({ email, password, role }) {
    const res = await fetch("/api/add-user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, role }),
        credentials: "include"
    });

    const data = await res.json();

    if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
    }

    return data;
}