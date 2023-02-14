export default function Person3Image() {
  return (
    <img
      srcset="/testimonials/image3/image3_1-1_150x150.jpg 150w, /testimonials/image3/image3_1-1_300x300.jpg 300w"
      sizes="150px"
      src="/testimonials/image3/image3_1-1_150x150.jpg"
      alt="Image of person leaving a review"
      loading="lazy"
    />
  );
}
