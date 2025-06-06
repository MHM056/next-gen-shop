import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        minlength: [3, "Title should be at least 3 characters long"],
        maxlength: [30, "Title should be no longer than 30 characters"],
        match: [/[a-zA-Z0-9]+/, "Title must contain latin letters and digits only"]
    },
    description: {
        type: String,
        required: [true, 'Description is required!'],
        minlength: [10, 'Description should be at least 10 characters long'],
        maxlength: [200, 'Description should be no longer than 200 characters']
    },
    brand: {
        type: String,
        required: [true, "Brand is required"],
        minlength: [2, "Brand must be at least 2 characters long"],
        maxlength: [10, "Brand must be no longer than 10 characters"]
    },
    category: {
        type: String,
        required: [true, "Category is required"],
        enum: ["Headphones", "Earbuds", "Speakers", "Microphones", "Accessories"]
    },
    feature: {
        type: String,
        required: [true, "Feature is required"],
        enum: ["Wireless", "Noise Cancellation", "Voice Assistant", "Water Resistant"]
    },
    colors: [{
        type: String,
        lowercase: true
    }],
    quantity: {
        type: Number,
        required: [true, "Quantity is required"],
        validate: {
            validator: function (v) {
                return v > 0;
            },
            message: "Quantity must be a positive number bigger than 0"
        }
    },
    price: {
        type: Number,
        required: [true, "Price is required"],
        validate: {
            validator: function (v) {
                return v > 0;
            },
            message: "Price must be a positive number bigger than 0"
        }
    },
    discount: {
        type: Number,
        validate: {
            validator: function (v) {
                return v >= 10 && v <= 90;
            },
            message: "Discount must be between 10 and 90 percent"
        }
    },
    reviews: [{
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        rating: {
            type: Number,
            required: true,
            validate: {
                validator: function (v) {
                    return v >= 1 && v <= 5;
                },
                message: "Rating must be between 1 and 5"
            }
        },
        comment: {
            type: String,
            minlength: [1, "Comment must be at least 1 character long"],
            maxlength: [100, "Comment must be no longer than 100 characters"]
        }
    }],
    reviewCount: {
        type: Number,
        default: 0
    },
    averageRating: {
        type: Number,
        default: 0
    },
    isFeatured: {
        type: Boolean,
        default: false
    },
    images: [{
        type: String,
        required: [true, "Image is required"]
    }],
    manualLabel: {
        type: String,
        enum: ["NEW", "POPULAR", "LIMITED", null],
        uppercase: true,
        default: null
    },
    timestamps: true
});

itemSchema.virtual("label").get(function () {
    if (this.manualLabel) {
        return this.manualLabel;
    }

    const ageInDays = (Date.now() - this.createdAt) / (1000 * 60 * 60 * 24);

    if (ageInDays <= 30) {
        return "NEW";
    }

    if (this.reviewCount >= 100 || this.rating >= 4.5) {
        return "POPULAR";
    }

    if (this.quantity > 0 && this.quantity <= 10) {
        return "LIMITED";
    }

    return null;
});

// Ensure virtuals are included in JSON
productSchema.set('toJSON', { virtuals: true });
productSchema.set('toObject', { virtuals: true });

export default mongoose.models.Item || mongoose.model("Item", itemSchema);