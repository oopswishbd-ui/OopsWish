import os
from PIL import Image, ImageDraw, ImageFont

def make_gradient(w, h, c1, c2):
    img = Image.new('RGB', (w, h), c1)
    d = ImageDraw.Draw(img)
    for y in range(h):
        r = c1[0] + (c2[0] - c1[0]) * y // h
        g = c1[1] + (c2[1] - c1[1]) * y // h
        b = c1[2] + (c2[2] - c1[2]) * y // h
        d.line([(0, y), (w, y)], fill=(r, g, b))
    return img

# Enhanced Logo
logo = Image.new('RGBA', (440, 130), (0, 0, 0, 0))
d = ImageDraw.Draw(logo)
# Gift badge icon
d.rounded_rectangle([15, 15, 105, 105], radius=28, fill=(142, 49, 87, 255))
d.rounded_rectangle([25, 25, 95, 95], radius=22, fill=(171, 65, 109, 255))
d.ellipse([45, 45, 75, 75], fill=(212, 175, 55, 255))
d.text((125, 28), "OopsWish", fill=(142, 49, 87, 255))
d.text((128, 70), "DIGITAL SURPRISES • BANGLADESH", fill=(212, 175, 55, 255))
logo.save('OopsWish/assets/logo/logo.png', 'PNG')

# Enhanced Hero Image
hero = make_gradient(960, 960, (255, 245, 248), (255, 235, 242))
d = ImageDraw.Draw(hero)
# 3D tilted frame mockup
d.rounded_rectangle([120, 80, 840, 880], radius=50, fill=(255, 255, 255), outline=(217, 139, 168), width=4)
d.rounded_rectangle([160, 130, 800, 260], radius=24, fill=(142, 49, 87))
d.text((220, 160), "SURPRISE FOR SOMEONE SPECIAL", fill=(255, 255, 255))
d.text((310, 205), "Click To Open The Surprise Gift", fill=(212, 175, 55))
# Center box
d.rounded_rectangle([200, 310, 760, 720], radius=34, fill=(255, 249, 245), outline=(142, 49, 87), width=3)
d.ellipse([390, 380, 570, 560], fill=(217, 139, 168))
d.text((435, 455), "OPEN ME", fill=(255, 255, 255))
d.text((270, 600), "Personalized Audio • Memories • 3D Wishes", fill=(142, 49, 87))
d.text((300, 650), "Tap Anywhere On The Screen To Begin", fill=(100, 80, 90))
# Decorative badges
d.rounded_rectangle([220, 770, 460, 830], radius=18, fill=(212, 175, 55))
d.text((250, 792), "🎵 Background Song Active", fill=(25, 20, 25))
d.rounded_rectangle([500, 770, 740, 830], radius=18, fill=(142, 49, 87))
d.text((530, 792), "📸 3D Photo Album Ready", fill=(255, 255, 255))
hero.save('OopsWish/assets/hero/hero-image.png', 'PNG')

# Enhanced Sample Cards
samples_data = [
    ('OopsWish/assets/samples/birthday/birthday-01.jpg', 'Neon Celebration 3D', 'Birthday Surprise #01', 'Confetti • 5 Photos • Music', (142, 49, 87), (80, 20, 50)),
    ('OopsWish/assets/samples/birthday/birthday-02.jpg', 'Golden Sparkle Wish', 'Birthday Surprise #02', 'Balloons • Blow Candles • Letter', (100, 30, 60), (212, 175, 55)),
    ('OopsWish/assets/samples/birthday/birthday-03.jpg', 'Retro Polaroid Album', 'Birthday Surprise #03', 'Memories Carousel • Acoustic Song', (120, 45, 80), (190, 110, 140)),
    ('OopsWish/assets/samples/anniversary/anniversary-01.jpg', 'Romantic Rose Timeline', 'Anniversary Surprise #01', 'Milestone Journey • Love Notes', (130, 35, 65), (70, 15, 35)),
    ('OopsWish/assets/samples/anniversary/anniversary-02.jpg', 'Starry Constellation', 'Anniversary Surprise #02', 'Secret Passcode • Romantic Audio', (55, 20, 45), (142, 49, 87)),
    ('OopsWish/assets/samples/proposal/proposal-01.jpg', 'Will You Marry Me? 3D', 'Proposal Surprise #01', 'Playful No Button • Grand Fireworks', (142, 49, 87), (212, 175, 55)),
    ('OopsWish/assets/samples/proposal/proposal-02.jpg', 'Secret Confession Letter', 'Proposal Surprise #02', 'Heartfelt Audio • Rose Petals', (95, 25, 55), (180, 90, 120)),
]

for path, title, sub, feats, c1, c2 in samples_data:
    img = make_gradient(680, 460, c1, c2)
    d = ImageDraw.Draw(img)
    # Border
    d.rounded_rectangle([20, 20, 660, 440], radius=24, outline=(255, 255, 255, 140), width=3)
    # Header tag
    d.rounded_rectangle([45, 45, 220, 95], radius=14, fill=(212, 175, 55))
    d.text((65, 62), "✨ LIVE PREVIEW", fill=(25, 20, 25))
    # Category tag
    d.rounded_rectangle([480, 45, 635, 95], radius=14, fill=(255, 255, 255, 50), outline=(255, 255, 255), width=1)
    d.text((505, 62), sub.split('#')[0].strip(), fill=(255, 255, 255))
    # Center info card
    d.rounded_rectangle([50, 150, 630, 400], radius=20, fill=(20, 15, 22, 210), outline=(217, 139, 168), width=2)
    d.text((80, 190), title, fill=(255, 255, 255))
    d.text((80, 240), sub, fill=(212, 175, 55))
    d.text((80, 290), feats, fill=(230, 230, 230))
    d.rounded_rectangle([80, 335, 320, 380], radius=10, fill=(142, 49, 87))
    d.text((105, 348), "3D INTERACTIVE WEB GIFT", fill=(255, 255, 255))
    img.save(path, 'JPEG', quality=95)

print("Enhanced assets generated successfully.")
