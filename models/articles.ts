
import mongoose from  'mongoose';

const ArticleSchema = new mongoose.Schema({
    title: String,
    content : String,
    tags: [String],

    createdAt : {
        type: Date,
        default: Date.now
    }
})

export default mongoose.models.Article || mongoose.model("Article", ArticleSchema);