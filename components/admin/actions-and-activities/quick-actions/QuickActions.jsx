"use client";
import { useState } from "react";
import styles from "./QuickActions.module.css";
import Modal from "../../shared/Modal";
import AddUserForm from "@/components/forms/add-user-form/AddUserForm";
import AddProductForm from "@/components/forms/add-product-form/AddProductForm";

export default function QuickActions() {
    const [showAddUserForm, setShowAddUserForm] = useState(false);
    const [showAddProductForm, setShowAddProductForm] = useState(false);

    return (
        <div className={styles["quick-actions"]}>
            <div>
                <h3>Quick Actions</h3>
            </div>
            <div className={styles["actions"]}>
                <div>
                    <button onClick={() => setShowAddProductForm(true)}>
                        <i className="ri-add-circle-line text-primary ri-2x mb-2"></i>
                        <h4>Add Product</h4>
                        <p>Create a new product listing</p>
                    </button>
                    <button onClick={() => setShowAddUserForm(true)}>
                        <i className="ri-user-add-line text-primary ri-2x mb-2"></i>
                        <h4>Add User</h4>
                        <p>Create a new user account</p>
                    </button>
                </div>
                <div>
                    <button>
                        <i className="ri-price-tag-3-line text-primary ri-2x mb-2"></i>
                        <h4>Add Discount</h4>
                        <p>Create a new discount code</p>
                    </button>
                    <button>
                        <i className="ri-settings-line text-primary ri-2x mb-2"></i>
                        <h4>Settings</h4>
                        <p>Manage store settings</p>
                    </button>
                </div>
            </div>

            {showAddUserForm && (
                <Modal onClose={() => setShowAddUserForm(false)}>
                    <AddUserForm onClose={() => setShowAddUserForm(false)} />
                </Modal>
            )}
            {showAddProductForm && (
                <Modal onClose={() => setShowAddProductForm(false)}>
                    <AddProductForm onClose={() => setShowAddProductForm(false)} />
                </Modal>
            )}
        </div>
    );
}