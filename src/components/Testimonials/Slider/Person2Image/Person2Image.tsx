export default function Person2Image() {
  return (
    <img
      srcset="/testimonials/image2/image2_1-1_150x150.jpg 150w, /testimonials/image2/image2_1-1_300x300.jpg 300w"
      sizes="150px"
      src="/testimonials/image2/image2_1-1_150x150.jpg"
      alt="Image of person leaving a review"
      loading="lazy"
    />
  );
}
