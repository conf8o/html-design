from PIL import Image

def resize_shorter(size: tuple, length: int) -> tuple:
    long, short = size if size[0] > size[1] else reversed(size)
    after = (int(length * (long / short)), length)
    return after if size[0] > size[1] else reversed(size)

def crop_center(size: tuple, crop_size: tuple) -> tuple:
    (left, right), (upper, lower) = (((a - b) // 2, (a + b) // 2) for a, b in zip(size, crop_size))
    return (left, upper, right, lower)

def center_squre(img: Image, length: int) -> Image:
    small = resize_shorter(img.size, length)
    crop_point = crop_center(small, (length, length))
    return img.resize(small).crop(crop_point)

center_squre(Image.open("./img/apex.png"), 50).save("./img/apex_square.png")