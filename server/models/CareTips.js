const mongoose = require('mongoose');
const caretipsSchema = new mongoose.Schema({
    name: {
      type: String,
      required: 'This field is required.'
    },
    description: {
      type: String,
      required: 'This field is required.'
    },
    water: {
      type: String,
      required: 'This field is required.'
    },
    soil: {
      type: Array,
      required: 'This field is required.'
    },
    sunlight: {
        type: Array,
        required: 'This field is required.'
      },
    fertilizer: {
        type: Array,
        required: 'This field is required.'
      },
    humidity: {
        type: Array,
        required: 'This field is required.'
      },
    category: {
      type: String,
      enum: ['Indoor', 'Rare', 'Succulent', 'Hanging', 'Cactus'],
      required: 'This field is required.'
    },
    image: {
      type: String,
      required: 'This field is required.'
    },
  });
  
  caretipsSchema.index({ name: 'text', description: 'text' });




module.exports = mongoose.model('CareTips', caretipsSchema);