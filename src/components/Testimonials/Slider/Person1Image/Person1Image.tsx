export default function Person1Image() {
  return (
    <img
      srcset="/testimonials/image1/image1_1-1_150x150.jpg 150w, /testimonials/image1/image1_1-1_300x300.jpg 300w"
      sizes="150px"
      src="/testimonials/image1/image1_1-1_150x150.jpg"
      alt="Image of person leaving a review"
      loading="lazy"
    />
  );
}
