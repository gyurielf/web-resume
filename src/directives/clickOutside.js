export default {
    beforeMount: (el, binding) => {
        el.eventSetDrag = () => {
            el.setAttribute('data-dragging', 'yes');
        };
        el.eventClearDrag = () => {
            el.removeAttribute('data-dragging');
        };
        el.eventOnClick = event => {
            const dragging = el.getAttribute('data-dragging');
            // Check that the click was outside the el and its children, and wasn't a drag
            // console.log(
            //     document.elementsFromPoint(event.clientX, event.clientY)
            // );
            if (
                !document
                    .elementsFromPoint(event.clientX, event.clientY)
                    .includes(el) &&
                !dragging &&
                !(el === event.target || el.contains(event.target))
            ) {
                // call method provided in attribute value
                binding.value(event);
                // console.log(event);
            }
            // BASIC -- WORKING!
            // if (!(el == event.target || el.contains(event.target))) {
            //     // and if it did, call method provided in attribute value
            //     binding.value();
            // }
        };
        document.addEventListener('touchstart', el.eventClearDrag);
        document.addEventListener('touchmove', el.eventSetDrag);
        document.addEventListener('click', el.eventOnClick);
        document.addEventListener('touchend', el.eventOnClick);
    },
    unmounted: el => {
        document.removeEventListener('touchstart', el.eventClearDrag);
        document.removeEventListener('touchmove', el.eventSetDrag);
        document.removeEventListener('click', el.eventOnClick);
        document.removeEventListener('touchend', el.eventOnClick);
        el.removeAttribute('data-dragging');
    }
};
